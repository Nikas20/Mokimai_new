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
            Task3();
        }
        static void Task1()
        {
            string input = Console.ReadLine();

            int[] unical = new HashSet<int>(input.Split(" ").Select(int.Parse)).ToArray();

                foreach (var item in unical)
                {
                    Console.WriteLine(item);
                }    
        }
        static void Task2()
        {
            var numbers1 = new HashSet<int> {1, 2 , 3 , 4 , 5};
            var numbers2 = new HashSet<int> {1, 3, 7, 7, 4, 8};
            var numbers3 = numbers1.Intersect(numbers2);
            foreach(var num in numbers3)
            {
                Console.WriteLine(num);
            }
        }
        static void Task3()
        {
            var str = new HashSet<string> {"abo","attr","etete","abo"}; // praliadau etapa su split()
            // foreach(var s in str)
            // {
            //     Console.WriteLine(s);
            // }
            Console.WriteLine(str.Count);
        }
        
    }
}