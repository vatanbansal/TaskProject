using System.ComponentModel.DataAnnotations;

namespace TaskAPI.Models
{
    public enum TaskStatus
    {
        All,
        ToDo,
        InProgress,
        Done
    }
    public class Task
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }
        public string? Description { get; set; }
        public TaskStatus Status { get; set; }
    }
}
