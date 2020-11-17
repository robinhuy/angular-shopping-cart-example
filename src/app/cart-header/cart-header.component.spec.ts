import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CartHeaderComponent } from "./cart-header.component";

let component: CartHeaderComponent;
let fixture: ComponentFixture<CartHeaderComponent>;
let count: HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [CartHeaderComponent],
  });
  fixture = TestBed.createComponent(CartHeaderComponent);

  // Create component test instance
  component = fixture.componentInstance;

  // Get count element
  count = fixture.nativeElement.querySelector(".count");
});

it("Should show correct number items in the bag", () => {
  // Set numberItems attribute to 3
  component.numberItems = 3;
  fixture.detectChanges();

  // Expect result
  expect(count.textContent).toContain("3 items in the bag");
});
