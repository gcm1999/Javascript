class hello {

    public static void main(String[] args) {
        Fn fn = new Fn();
        int count1 = fn.add();
        int count2 = fn.add();
        int count3 = fn.add();
        System.out.println(count1);
        System.out.println(count2);
        System.out.println(count3);

    }

}

class Fn {
    int count = 0;

    public int add() {
        return ++count;
    }
}