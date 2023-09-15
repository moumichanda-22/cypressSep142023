class DragAndDrop{
    element ={
        dragAndDropPage:()=>cy.get('#useractionstest'),
        dragOne:()=>cy.get('#draggable1'),
        dragTwo:()=>cy.get('#draggable2'),
        dropOne:()=>cy.get('#droppable1'),
        dropTwo:()=>cy.get('#droppable2')
    }
    navigateToThePage(){
        this.element.dragAndDropPage().click().should('have.text',"Drag And Drop Examples")
    }
    dragToTheTarget(){
        this.element.dragOne().trigger('mouseover')
        this.element.dragTwo().trigger('mouseover')
    }
    droppedToTheTarget(){
        this.element.dropOne().should('contain','Dropped')
        this.element.dropTwo().should('contain','Dropped')
    }
}
export const dragDrop = new DragAndDrop();
