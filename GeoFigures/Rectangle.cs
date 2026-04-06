using System;

namespace MyApp
{
    internal class Rectangle : Shape
    {
        private double Width{ get; set;}
        private double Height{ get; set;}

        public  Rectangle(double Width , double Height)
        {
            this.Width  = Width ;
            this.Height = Height;
        }

        public override double GetArea()
        {
            return Width * Height;
        }
        public override double GetPerimeter()
        {
            return 2 * (Width + Height);
        }
        
    }
}