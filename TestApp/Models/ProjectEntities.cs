using System.Data.Entity;

namespace TestApp.Models
{
    public class ProjectEntities : DbContext
    {
        public DbSet<Project> Projects { get; set; }
    }
}