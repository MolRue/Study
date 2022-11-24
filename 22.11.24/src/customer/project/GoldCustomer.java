package customer.project;


public class GoldCustomer extends Customer{

	double saleRatio;
	
	public GoldCustomer(int customerID, String customerName){
		super(customerID, customerName);
	
		super.customerGrade = "GOLD";
		super.bonusRatio = 0.02;
		this.saleRatio = 0.1;
	
	}

	/*
	【문항2】 아래 항목과 클래스 다이어그램을 참고하여 Customer 클래스에서 override된 calcPrice 메소드를 
        GoldCustomer.java에 작성하시오.
        - 보너스 포인트 계산법은 동일하다.
        - price는 리턴시킨다. *공식:  price - (price * saleRatio) 
    */

}
