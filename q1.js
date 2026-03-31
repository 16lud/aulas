import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Q3 {
    public static void main(String[] args) {
        LocalDate inicio = LocalDate.of(2025, 1, 1);
        LocalDate data = LocalDate.of(2025, 4, 11);

        long dias = ChronoUnit.DAYS.between(inicio, data);

        System.out.println("Dias: " + dias);
    }
}
