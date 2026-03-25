using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>
            {
            new Person { FirstName = "Jonas", LastName = "Jonaitis", Age = 30, City = "Vilnius" },
            new Person { FirstName = "Petras", LastName = "Petraitis", Age = 45, City = "Kaunas" },
            new Person { FirstName = "Ona", LastName = "Onienė", Age = 22, City = "Klaipėda" },
            new Person { FirstName = "Mantas", LastName = "Mantinis", Age = 50, City = "Šiauliai" },
            new Person { FirstName = "Eglė", LastName = "Eglaitė", Age = 28, City = "Panevėžys" },
            new Person { FirstName = "Tomas", LastName = "Tomaitis", Age = 40, City = "Vilnius" }
            };

            var top5OlderPeople = people.OrderByDescending(p => p.Age).Take(5).ToList();

            Console.WriteLine("Top 5 oldest people:");
            foreach (var person in top5OlderPeople)
            {
                Console.WriteLine($"{person.FirstName} {person.LastName}, Age: {person.Age}, City: {person.City}");
            }

            string filePath = "zmones.txt";

            using (StreamWriter writer = new StreamWriter(filePath))
            {
                foreach (var person in people)
                {
                    writer.WriteLine($"{person.FirstName} {person.LastName} {person.Age} {person.City}");
                }
            }
            Console.WriteLine("");
            DisplayPeople();
            Console.WriteLine("");
            OrderPersonMethod();
            Console.WriteLine("");
            FilterPersonMethod();
        }
        static void DisplayPeople()
        {
            using StreamReader reader = new StreamReader("zmones.txt");

            List<Person> peopleFromFile = new List<Person>();
            string line;
            for (int i = 0; i < 1; i++)
            {
                line = reader.ReadLine();
                string[] parts = line.Split(" ");
                if (parts.Length == 4)
                {
                    peopleFromFile.Add(new Person
                    {
                        FirstName = parts[0],
                        LastName = parts[1],
                        Age = int.Parse(parts[2]),
                        City = parts[3]
                    });
                }
                Console.WriteLine($"{peopleFromFile[0].FirstName} {peopleFromFile[0].LastName}, Age: {peopleFromFile[0].Age}, City: {peopleFromFile[0].City}");
            }
        }

        static List<Person> LoadFromFile()
        {
            using StreamReader reader = new StreamReader("zmones.txt");

            List<Person> peopleFromFile = new List<Person>();
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                string[] parts = line.Split(" ");
                if (parts.Length == 4)
                {
                    peopleFromFile.Add(new Person
                    {
                        FirstName = parts[0],
                        LastName = parts[1],
                        Age = int.Parse(parts[2]),
                        City = parts[3]
                    });
                }
            }
            return peopleFromFile;
        }

        static void OrderPersonMethod()
        {
            Console.WriteLine("Write category to ORDER: 1 - FirstName, 2 - LastName, 3 - Age, 4 - City");
            int categ = int.Parse(Console.ReadLine());

            List<Person> peopleFromFile = LoadFromFile();
            
            var sortedPeople = OrderPerson.Order(peopleFromFile, categ);

            foreach (var per in sortedPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Age: {per.Age}, City: {per.City}");
            }
        }


        static void FilterPersonMethod()
        {
            Console.WriteLine("Write category to FILTER: 1 - FirstName, 2 - LastName, 3 - Age, 4 - City");
            int categ = int.Parse(Console.ReadLine());
            Console.WriteLine("Write value:");
            string input = Console.ReadLine();
            
            List<Person> peopleFromFile =  LoadFromFile();
            
            var filterPeople = FilterPerson.Filter(peopleFromFile, categ, input);

            foreach (var per in filterPeople)
            {
                Console.WriteLine($"{per.FirstName} {per.LastName}, Age: {per.Age}, City: {per.City}");
            }
        }

    }
}