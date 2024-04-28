/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        int number1 = 0;
        int number2 = 0;
        int total = 0;
        ListNode dummyhead = new ListNode(0);
        ListNode pointer = dummyhead;
        while(l1 != null || l2 != null || carry != 0){
            number1 = 0;
            number2 = 0;
            total = 0;
            if(l1 != null){
                number1 = l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                number2 = l2.val;
                l2 = l2.next;
            }
            total = number1 + number2 + carry;
            if(total >= 10){
                carry = 1;
                total -= 10;
            } else {
                carry = 0;
            }

            pointer.next = new ListNode(total);
            pointer = pointer.next;
        }

        return dummyhead.next;
    }
}