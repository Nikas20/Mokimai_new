using System;

namespace MyApp
{
    internal class Rectangle
    {
        private double Width{ get; set;}
        private double Height{ get; set;}

        public Rectangle()
        {
            this.Width = 0;
            this.Height = 0;
        }

        public Rectangle(double Width , double Height)
        {
            this.Width  = Width ;
            this.Height = Height;
        }

        public double GetArea()
        {
            return Width * Height;
        }
        public double GetPerimeter()
        {
            return 2 * (Width + Height);
        }
        
    }
}