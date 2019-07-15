package tests;

public class TechTest {
	
	
	public void testArray()
	{
		int arr[] = {1,2,3,4,5};
	
		
		for(int i=0;i<arr.length;i++)
		{
			System.out.println("The array values are " + arr[i]);
		}
		
	}

	public static void main(String[] args) {
		
		
		TechTest tr = new TechTest();
		tr.testArray();
		
		
		
	}

}
