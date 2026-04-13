using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double[] tempetures = { 9.1, -7.2, 9.4, 14.5, 10.5, -2.6, 4.0, 28.3, -0.4, 31.1, 25.8, 3.3, 34.1, 29.8, 28.3, -9.4, 17.4, 25.9, -4.1, -4.9, 4.7, 33.7, 3.9, 32.4, 34.2, 5.8, 28.6, 21.7, 18.9, 5.5 };

            Console.WriteLine("Uz menesi Temperatura");
            Console.WriteLine("=====================");

            foreach (var temp in tempetures)
            {
                Console.WriteLine(temp);
            }
            Console.WriteLine("=====================");

            AnomalyTemperature(tempetures);


        }

        static void AnomalyTemperature(double[] tempetures)
        {
            for (int i = 1; i <= tempetures.Length; i++)
            {
                var m1 = Math.Max(tempetures[i - 1], tempetures[i]);
                var m2 = Math.Min(tempetures[i - 1], tempetures[i]);
                double t = 0;
                if (m2 < 0)
                {
                    t = m2 * -1;
                }
                else
                {
                    t = m2;
                }

                double d1 = Math.Abs(m1 - t);
                if (d1 > 8)
                {
                    Console.WriteLine($"{d1} skirtumas su praetu");
                    Console.WriteLine(tempetures[i]);
                }

            }
        }
    }
}