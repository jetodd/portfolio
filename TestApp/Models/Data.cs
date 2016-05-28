using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TestApp.Models
{
    public class Data: DropCreateDatabaseIfModelChanges<ProjectEntities>
    {
        protected override void Seed(ProjectEntities context)
        {
            new List<Project>
            {
                new Project {Name="Glow", Description="A game made for a university paper."},
                new Project {Name="Super Zebra candy rainbow adventure", Description = "Super zebra candy rainbow adventure was a " +
                                                                                       "game made for global game jam, an annual 48 hour game hackathon." +
                                                                                       "This game was made with a team of 3.5 (there were casualties along the " +
                                                                                       "way) awesome peeps. I primarily worked on the art and procedural " +
                                                                                       "generation of the terrain."},
                new Project {Name="Website", Description ="a site"},
                new Project {Name="Top secret thing", Description = "asdfsa"}
            }.ForEach(p => context.Projects.Add(p));
        }
    }
}