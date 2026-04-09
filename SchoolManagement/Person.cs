using System;

namespace MyApp
{
    public abstract class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string Email { get; set; }

        public abstract string GetRole();
        public abstract string GetProfile();
        public virtual string GetContactInfo() => $"Email: {Email}";
    }
}