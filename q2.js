public class Q2 {
    public static void main(String[] args) {
        double mediaParcial = 50;
        double mediaFinal = 60;
        double pesoParcial = 6;
        double pesoFinal = 4;

        double nota = (mediaFinal - (mediaParcial * pesoParcial)) / pesoFinal;

        System.out.println("Nota necessária: " + nota);
    }
}
