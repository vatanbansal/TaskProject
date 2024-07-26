using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;
using Task = TaskAPI.Models.Task;
using TaskStatus = TaskAPI.Models.TaskStatus;

namespace TaskAPI.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }
        public DbSet<Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Task>().Property(t => t.Status).HasConversion<string>();
        }
    }
}
