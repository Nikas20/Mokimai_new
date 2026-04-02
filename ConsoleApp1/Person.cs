using System;

namespace MyApp
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public DateTime Birthdate { get; set; }
        public int Age
        {
            get
            {
                var now = DateTime.Today;
                var age = now.Year - Birthdate.Year;
                if (Birthdate > now.AddYears(-age)) age--;
                return age;
            }
        }
        public string City { get; set; }



        static void DisplayPeople()
        {
            using StreamReader reader = new StreamReader("zmones.txt");
            List<Person> peopleFromFile = new List<Person>();
            string line;

            while ((line = reader.ReadLine()) != null)
            {
                string[] parts = line.Split(' ');

                if (parts.Length >= 4)
                {

                    peopleFromFile.Add(new Person
                    {
                        FirstName = parts[0],
                        LastName = parts[1],
                        Birthdate = DateTime.Parse(parts[2] + " " + parts[3]),
                        City = parts[parts.Length - 1]
                    });

                }
            }

            // Выводим всех прочитанных людей
            foreach (var person in peopleFromFile)
            {
                Console.WriteLine($"{person.FirstName} {person.LastName}, Birthdate: {person.Birthdate:yyyy-MM-dd}, City: {person.City}");
            }
        }

        public static List<Person> LoadFromFile()
        {
            List<Person> peopleFromFile = new List<Person>();
            if (!File.Exists("zmones.txt")) return peopleFromFile;

            using StreamReader reader = new StreamReader("zmones.txt");
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                string[] parts = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (parts.Length >= 4)
                {
                    string rawDate = string.Join(" ", parts.Skip(2).Take(parts.Length - 3));

                    peopleFromFile.Add(new Person
                    {
                        FirstName = parts[0],
                        LastName = parts[1],
                        Birthdate = DateTime.Parse(rawDate),
                        City = parts[parts.Length - 1]
                    });
                }
            }
            return peopleFromFile;
        }



    }
}