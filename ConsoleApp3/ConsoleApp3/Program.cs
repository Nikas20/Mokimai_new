using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // WriteStudent();
            ReadStudent();
        }
        internal class Student
        {
            public string Name { get; set; }
            public int Score { get; set; }

            public Student(string Name, int Score)
            {
                Name = this.Name;
                Score = this.Score;
            }
            


        }
        static void WriteStudent()
        {
            Console.WriteLine("Write Name");
            string inputName = Console.ReadLine();
            Console.WriteLine("Write Score");
            string inputScore = Console.ReadLine();



            using var writer = new StreamWriter("students.txt", true);
            writer.WriteLine($"{inputName}: {inputScore}");

        }
        static void ReadStudent()
        {
            using var reader = new StreamReader("students.txt");
            if (reader == null)
            {
                Console.WriteLine("File not found.");
                return;
            }
            else
            {
                while (!reader.EndOfStream)
                {


                    string line = reader.ReadLine();


                    string[] wordsArray = line.Split("");

                    Student[] students;
                    for (int i = 0; i < wordsArray.Length; i++)
                    {
                        string[] words = line.Split(": ");
                        Student student = new Student(words[0], int.Parse(words[1]));
                        students.Append(student);
                    }
                    foreach (var item in students)
                    {
                        Console.WriteLine(item);
                    }

                }

            }

        }


    }
}