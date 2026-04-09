using System;

namespace MyApp
{
    public class Administrator : Staff
    {
        public string Office  { get; set; }
        public List<string> Responsibilities  { get; set; } = new List<string>();
        public double TeachingRating { get; set; }

        public override string GetRole() => "Administrator";
        public override string GetProfile() => 
            $"{GetRole()}: {FirstName} {LastName}, Dept: {Department}, Office: {Office}, Salary: {Salary:C}, Hired: {HireDate.ToShortDateString()}, Teaching Rating: {TeachingRating:F1}, Responsibilities: {string.Join(", ", Responsibilities)}";

        public virtual decimal CalculateAnnualBonus()
        {
            decimal baseBonus = base.CalculateAnnualBonus();
            return baseBonus + 500m;
        }
        
    }
}