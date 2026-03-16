using System;

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

        
            Console.WriteLine("Hello World!");
        }

        static void Task1()
        {
            string input = "   Vilnius   ";
            string result = input.Replace(" ", "");
            Console.WriteLine(result);
        }

        static void Task2()
        {
            string text = "Šitas filmas yra kvailas ir nuobodus";
            string[] words = text.Split(" ");
            for(int i = 0; i < words.Length; i++)
            {
                if (words[i] == "kvailas" ||  words[i] =="nuobodus")
                {
                   words[i] = "***"; 
                }
            }
            string result = string.Join(" ", words);
            Console.WriteLine(result);
        }
        static void Task3()
        {
            Console.WriteLine("Parasikit varda ir pavarde");
            string input = Console.ReadLine();

            string[] words = input.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            string[] rezult = new string[words.Length];

            for (int i = 0; i < words.Length; i++)
            {
                rezult[i] = words[i][0].ToString();
            }

            string result = string.Join(".", rezult);
            Console.WriteLine(result);
        }

        static void Task4()
        {
            string email = "Studentas@Mokykla.LT";
            bool priklauso = email.ToLower().EndsWith("@mokykla.lt");
            Console.WriteLine(priklauso);



        }

    }
}