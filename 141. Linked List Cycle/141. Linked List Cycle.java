/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow=head;
        ListNode fast=head;
        while(fast != null && slow != null){
            slow = slow.next;
            fast = fast.next;
            if(fast != null) fast = fast.next;
            if(slow == fast && fast != null) return true;
        }
        return false;
    }
}