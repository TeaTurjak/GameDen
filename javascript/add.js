$().ready(function(){
    let cart_for_items = {
      cost : 0.00,
      items: []
    };
  
    let cartTable = $('#cart-table');
    let totalLabel = $('.cart-total-price');
  
    $('[id^=item-]').click(function(){
        let item = this.id.split('-')[1];
        cart_for_items.items.push(item);
        cart_for_items.cost += $('#'+item).data().cost;
        totalLabel.text('$' + cart_for_items.cost);
        cartTable.append(
          "<tr>" +
            "<td> "+ item +" </td> " +
            "<td> "+ $('#'+item).data().cost +" </td> " +
            "<tr>"
        );
      console.log(cart_for_items);
    });
  
});