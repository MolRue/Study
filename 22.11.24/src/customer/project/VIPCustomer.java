package customer.project;


public class VIPCustomer extends Customer{

	private int agentID;
	double saleRatio;
	
	public VIPCustomer(int customerID, String customerName, int agentID){
		super(customerID, customerName);
	
		super.customerGrade = "VIP";
		super.bonusRatio = 0.05;
		this.saleRatio = 0.1;
		this.agentID = agentID;
	}
	
	/*
	【문항3】 아래 항목과 클래스 다이어그램을 참고하여 Customer 클래스에서 override된 calcPrice 메소드를 
        VIPCustomer.java에 작성하시오.
         - 보너스 포인트 계산법은 동일하다.
         - price는 리턴시킨다. *공식:  price - (price * saleRatio)  
    */
	
	/*
	【문항4】 아래 항목과 클래스 다이어그램을 참고하여 Customer 클래스에서 override된 showCustomerInfo
    메소드를 VIPCustomer.java에 작성하시오.
      -메소드 실행시 실행 결과는 ‘이율곡님의 등급: VIP, 보너스 포인트: 0점, 담당 상담원 번호:12345’.
      - Customer클래스의 showCustomerInfo()를 호출하여 완성.
     */

	public int getAgentID(){
		return agentID;
	}
}
