using System;
using System.Collections.Immutable;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Task1();
            Task2();
            Task3();
        }
        static void Task1()
        {
            string input = Console.ReadLine();

            Dictionary<string, int> dict = new Dictionary<string, int>();

            string[] las = input.Split(" ");

            foreach (string l in las)
            {
                if (dict.ContainsKey(l))
                {
                    dict[l]++;
                }
                else
                {
                    dict.Add(l, 1);
                }
            }
            
            dict.OrderBy(g => g.Key);

           foreach (var item in dict)
            {
                Console.WriteLine($"{item.Key} - {item.Value}");
            }
        }
        static void Task2()
        {
            Dictionary<string, string> dict = new Dictionary<string, string>();
            AddToDict(dict, "key1", "value1");
            AddToDict(dict, "key2", "value2");
            AddToDict(dict, "key1", "value3");
            RemoveFromDict(dict, "key2", "value2");
            foreach (var item in dict)
            {
                Console.WriteLine($"{item.Key} - {item.Value}");
            }



        }
        static void AddToDict(Dictionary<string, string> dict, string key, string value)
        {
            if (dict.ContainsKey(key))
            {
                dict[key] = value;
            }
            else
            {
                dict.Add(key, value);
            }
        }
        static void RemoveFromDict(Dictionary<string, string> dict, string key, string value)
        {
            if (dict.ContainsKey(key))
            {
                dict[key] = value;
            }
            else
            {
                dict.Remove(key);
            }
        }
        static void SearchInDict(Dictionary<string, string> dict, string key, string value)
        {
            if(dict.ContainsValue(value))
            {
                Console.WriteLine($"{key} => {value}");
            }
            else
            {
                Console.WriteLine($"Not found");
            }
        }
        static void Task3()
        {}
    }
}