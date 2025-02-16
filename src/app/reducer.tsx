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

export type State = {
    speed: number
    text: string
    count: number
}
  
export type Action =
    | { type: 'DELAY'; payload: number }
    | { type: 'TYPE'; payload: string; speed: number }
    | { type: 'DELETE'; payload: string; speed: number }
    | { type: 'COUNT' }
  
export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'TYPE':
        return {
            ...state,
            speed: action.speed,
            text: action.payload?.substring(0, state.text.length + 1)
        }
        case 'DELAY':
        return {
            ...state,
            speed: action.payload
        }
        case 'DELETE':
        return {
            ...state,
            speed: action.speed,
            text: action.payload?.substring(0, state.text.length - 1)
        }
        case 'COUNT':
        return {
            ...state,
            count: state.count + 1
        }
        default:
        return state
    }
}
