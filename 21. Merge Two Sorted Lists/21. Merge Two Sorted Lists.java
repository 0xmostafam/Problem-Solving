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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = new ListNode();
        ListNode pointer = head;
        while (list1 != null && list2 != null){
            if(list2 == null || list1.val <= list2.val){
                pointer.next = new ListNode(list1.val);
                list1 = list1.next;
            } else if(list1 == null || list2.val <= list1.val){
                pointer.next = new ListNode(list2.val);
                list2 = list2.next;
            }
            pointer = pointer.next;
        }
        pointer.next = (list1 != null) ? list1 : list2;
        return head.next;
    }
}