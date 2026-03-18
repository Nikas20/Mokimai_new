using System;
using System.Collections.Generic;
using System.Linq;
namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Task1();
            Task2();
            Task3();
            Task4();
            Task5();
            Task6();
            Task7();

            Console.WriteLine("Hello World!");
        }
        static void Task1()
        {
            List<int> l = new List<int> { 1, 2, 3, 4, 5 };
            l.Add(6);
            l.Remove(3);
            Console.WriteLine(l.Min());
            Console.WriteLine(l.Max());
            Console.WriteLine(l.Average());
        }
        static void Task2()
        {
            string input = Console.ReadLine() ?? "0";
            List<int> n = input
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();

            List<int> duplicates = n.GroupBy(x => x)
                              .Where(g => g.Count() > 1)
                              .Select(g => g.Key)
                              .ToList();

            for (int i = 0; i < duplicates.Count; i++)
            {
                Console.Write(duplicates[i] + " ");
            }
            Console.WriteLine();
            
        }
        static void Task3()
        {
            List<int> n = new List<int> { 1, 2, 3, 4, 5, 4, 3, 2, 1 };
            List<int> longest = new List<int>();
            List<int> current = new List<int>();

            for(int i = 0; i < n.Count)
            {
                
            }
        }
        static void Task4()
        {
            Console.WriteLine("Task 4");
        }
        static void Task5()
        {
            Console.WriteLine("Task 5");
        }
        static void Task6()
        {
            Console.WriteLine("Task 6");
        }
        static void Task7()
        {
            Console.WriteLine("Task 7");
        }
    }
}