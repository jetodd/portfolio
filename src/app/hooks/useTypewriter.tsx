"use client";

// MIT License

// Copyright (c) 2023 MEK

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { useCallback, useEffect, useRef, useReducer } from "react";
import { reducer } from "../reducer";

export type ITypewriterProps = {
  onLoopDone?: () => void;
  onType?: (count: number) => void;
  onDelete?: () => void;
  onDelay?: () => void;
  words: string[];
  typeSpeed?: number;
  delay?: number
}

export type TypewriterHelper = {
  isType: boolean;
  isDelay: boolean;
  isDelete: boolean;
  isDone: boolean;
};

export const useTypewriter = ({
  words,
  typeSpeed = 80,
  delay = 1500,
  onLoopDone,
  onType,
  onDelete,
  onDelay,
}: ITypewriterProps): [string, TypewriterHelper] => {
  const [{ speed, text, count }, dispatch] = useReducer(reducer, {
    speed: typeSpeed,
    text: '',
    count: 0
  })

  // Refs
  const loops = useRef(0);
  const isDone = useRef(false);
  const isDelete = useRef(false);
  const isType = useRef(false);
  const isDelay = useRef(false);

  const handleTyping = useCallback(() => {
    const index = count % words.length;
    const fullWord = words[index];

    if (!isDelete.current) {
        dispatch({ type: "TYPE", payload: fullWord, speed: typeSpeed });
        isType.current = true;
        
        if (text === fullWord) {
            dispatch({ type: "DELAY", payload: delay });
            isType.current = false;
            isDelay.current = true;
            
            setTimeout(() => {
                isDelay.current = false;
                isDelete.current = true;
            }, delay);
        }
    } else {
        dispatch({ type: "DELETE", payload: fullWord, speed: typeSpeed / 2 });
        if (text === "") {
            isDelete.current = false;
            dispatch({ type: "COUNT" });
        }
    }

    if (isType.current) {
        if (onType) onType(loops.current);
    }

    if (isDelete.current) {
        if (onDelete) onDelete();
    }

    if (isDelay.current) {
        if (onDelay) onDelay();
    }
  }, [count, delay, typeSpeed, words, text, onType, onDelete, onDelay]);

  useEffect(() => {
    const typing = setTimeout(handleTyping, speed);

    if (isDone.current) clearTimeout(typing);

    return () => clearTimeout(typing);
  }, [handleTyping, speed]);

  useEffect(() => {
    if (!onLoopDone) return;

    if (isDone.current) {
      onLoopDone();
    }
  }, [onLoopDone]);

  return [
    text,
    {
      isType: isType.current,
      isDelay: isDelay.current,
      isDelete: isDelete.current,
      isDone: isDone.current,
    },
  ];
};
