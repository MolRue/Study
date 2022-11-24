package customer.project;


public class Customer {
	//필드
	protected int customerID;
	protected String customerName;
	protected String customerGrade;
	int bonusPoint;
	double bonusRatio;
	
	//생성자
	public Customer()
	{
		initCustomer();
	}

	public Customer(int customerID, String customerName){
		this.customerID = customerID;
		this.customerName = customerName;
		
		initCustomer();
	}
	
	//메소드
	//고객 등급 초기화
	private void initCustomer()
	{
		customerGrade = "SILVER";
		bonusRatio = 0.01;	
	}
	
	//보너스 포인트 계산, 가격 리턴
	public int calcPrice(int price){
		bonusPoint += (price * bonusRatio); //보너스 포인트 계산
		return price; //가격 리턴
	}
	
	//고객정보 보여주기
	public String showCustomerInfo(){
		return customerName + "님의 등급: " + customerGrade + ", 보너스 포인트: " + bonusPoint + "점";  
	}
	
	//【문항1】 Customer.java에서 아래 필드에 대한 getter, setter 함수를 작성하시오.

}
