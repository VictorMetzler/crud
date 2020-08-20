import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProdutcDeleteComponent implements OnInit {

  product: Product;
  
  constructor(
    private productService: ProductService,    
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {     
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  deleteProduto(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucessso!');
      this.router.navigate(['/products']);      
    })
  }

}
