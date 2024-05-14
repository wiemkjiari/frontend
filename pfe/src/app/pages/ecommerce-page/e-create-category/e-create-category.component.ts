import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink ,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { CategoryDto } from '../../../services/models';
import { CategoryControllerService } from '../../../services/services';
import { Save7$Params,} from '../../../services/fn/category-controller/save-7';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Subscription } from 'rxjs';
import {FindAll7$Params} from '../../../services/fn/category-controller/find-all-7';
@Component({
    selector: 'app-e-create-category',
    standalone: true,
    imports: [HttpClientModule,MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, NgxEditorModule],
    templateUrl: './e-create-category.component.html',
    styleUrls: ['./e-create-category.component.scss']
})
export class ECreateCategoryComponent  {
  categoryDto: CategoryDto = {};    // Text Editor
    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    ngOnInit(): void {
        this.editor = new Editor();
        const idCategory = this.activatedRoute.snapshot.params['idCategory'];
        if (idCategory) {
          this.categoryService.findById7({ idCategory })
            .subscribe(cat => {
              this.categoryDto = cat;
            });
        }
      }
  
       


    // make sure to destory the editor
    ngOnDestroy(): void {
        this.editor.destroy();
    }

    // File Uploader
    public multiple: boolean = false;

    // isToggled
    isToggled = false;
    private subscriptions = new Subscription();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient,
        private categoryService: CategoryControllerService,
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
      
    }
    cancel(): void {
        this.router.navigate(['ecommerce-page/categories']);

      }
    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
    saveCategory(): void {
        const params: Save7$Params = {
            body: this.categoryDto
        };
    
        this.categoryService.save7(params).subscribe({
            next: (savedCategory: CategoryDto) => {
                console.log('Catégorie enregistrée :', savedCategory);
                this.router.navigate(['ecommerce-page/categories']); 
            },
          error: (error) => {
            console.error('Error saving category:', error);
          }
        });
      }
      loadCategories(): void {
        this.categoryService.findAll7().subscribe({
            next: (loadedCategories: CategoryDto[]) => {
            },
            error: (error) => {
                console.error('Erreur lors du chargement des catégories :', error);
            }
        });
    }
      
}