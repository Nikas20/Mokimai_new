using System;

namespace MyApp
{
    public class Staff : Person
    {
        public string EmployeeId { get; set; }
        public string Department { get; set; }
        public decimal Salary { get; set; }
        public DateTime HireDate { get; set; }

            public override string GetRole() => "Staff";

         public override string GetProfile() => 
            $"{GetRole()}: {FirstName} {LastName}, Dept: {Department}, Salary: {Salary:C}, Hired: {HireDate.ToShortDateString()}";

         public override string GetContactInfo() => $"Email: {Email}, Dept: {Department}";

         public virtual decimal CalculateAnnualBonus()
        {
            int yearsWorked = DateTime.Now.Year - HireDate.Year;
            int periods = yearsWorked / 5;
            return Salary * 0.05m * periods; 
        }
    }
}