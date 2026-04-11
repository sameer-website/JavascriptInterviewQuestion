package Questions;

import java.util.HashMap;

public class DuplicateWord {

	public static void main(String[] args) {
		
		HashMap<Character, Integer> map = new HashMap<>();
		String name = "sameer";
		for (int i = 0; i < name.length(); i++) {
			char data = name.charAt(i);
		if (map.containsKey(data)) {
			map.put(data, map.get(data)+1);
			
		} else {
			map.put(data, 1);

		}
			
		}
		for (Character value : map.keySet()) {
			System.out.println(value +" = "+ map.get(value));
		}

	}

}
