using System;
using System.Collections.Immutable;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Task1();
            // Task2();
            // Task3();
            // Task4();
            // Task5();
            // Task6();
            Task7();
        }
        static void Task1()
        {
            string input = Console.ReadLine();

            using var writer = new StreamWriter("notes.txt");
            writer.WriteLine(input);

        }
        static void Task2()
        {
            using var reader = new StreamReader("notes.txt");
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
                    Console.WriteLine(line);
                }
            }
        }
        static void Task3()
        {   
            int lineCount = 0;
            int wordCount = 0;
            int simbolCount = 0;
            using var reader = new StreamReader("notes.txt");
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
                    lineCount++;
                    wordCount += line.Split(' ').Length;
                    simbolCount += line.Length;
                }
            }
            Console.WriteLine($"Line count: {lineCount}");
            Console.WriteLine($"Word count: {wordCount}");
            Console.WriteLine($"Symbol count: {simbolCount}");
        }
        static void Task4()
        {
             DateTime now = DateTime.Now;
             using var writer = new StreamWriter("logs.txt", true);
             writer.WriteLine(now.ToString("yyyy-MM-dd HH:mm:ss"));
        }
        static void Task5()
        {
           Dictionary<string, int> words = new Dictionary<string, int>();
           using var reader = new StreamReader("notes.txt");
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
                    string[] wordsArray = line.Split(" ");
                    foreach (string word in wordsArray)
                    {
                        if (words.ContainsKey(word))
                        {
                            words[word]++;
                        }
                        else
                        {
                            words[word] = 1;
                        }
                    }
                }
               Console.WriteLine(words.OrderByDescending(x => x.Value).Take(5)
                                .Select(x => $"{x.Key}: {x.Value}")
                                .Aggregate((a, b) => $"{a}\n{b}")); 
            } 
            
        }
        static void Task6()
        {
            Console.Write("Enter a word to search for: ");
            string input = Console.ReadLine();
            string filePath = "notes.txt";

            if (!File.Exists(filePath))
            {
                Console.WriteLine("File not found.");
                return;
            }

            int lineCount = 1;
            using var reader = new StreamReader(filePath);
            
            while (!reader.EndOfStream)
            {
                string line = reader.ReadLine();
                string[] wordsArray = line.Split(' ');

                if (Array.Exists(wordsArray, word => word == input))
                {
                    Console.WriteLine($"The word '{input}' appears in line: {lineCount} content: {line}");
                }
                
                lineCount++;
            }
        }
        static void Task7()
        {
            using var reader = new StreamReader("notes.txt");
            using var writer = new StreamWriter("incals.txt");
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
                    string[] words = line.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                    string word = string.Join(".", words.Select(w => w[0]));
                    writer.WriteLine(word + ".");
                }
            }
        }
        // static void Task8()
        // {
        //     int n = 3;
        //     using var reader = new StreamReader("notes.txt");
        //     using var writer = new StreamWriter("notes_n.txt");

        //      if (reader == null)
        //     {
        //         Console.WriteLine("File not found.");
        //         return;
        //     }
        //     else
        //     {
        //         while (!reader.EndOfStream)
        //         {
                    
        //         }
        //     }        
        // }
        // ne supratau kaip sifroti, tai nepadariau
    }
}