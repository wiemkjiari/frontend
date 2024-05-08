import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { ClientControllerService } from '../../../services/services';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { ClientDto } from '../../../services/models';
import { CommonModule } from '@angular/common';
import { AdresseDto } from '../../../services/models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
@Component({
    selector: 'app-e-customers',
    standalone: true,
    imports: [CommonModule,HttpClientModule,MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './e-customers.component.html',
    styleUrl: './e-customers.component.scss'
})
export class ECustomersComponent  implements OnInit{
    listClients: ClientDto[] = [];    displayedColumns: string[] = ['select', 'orderId', 'customer', 'email', 'phone', 'lastLogin', 'totalSpend', 'totalOrders', 'status', 'action'];
    selection = new SelectionModel<PeriodicElement>(true, []);
   // dataSourse = new MatTableDataSource<ClientDto>(this.clients);
   adresseDto: AdresseDto = {};
    errorMsg = '';

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
      //  this.dataSourse.paginator = this.paginator;
    }

    /** Whether the number of selected elements matches the total number of rows. */
   

    /** Selects all rows if they are not all selected; otherwise clear selection. */
 

    /** The label for the checkbox on the passed row */
  

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
       // this.dataSourse.filter = filterValue.trim().toLowerCase();
    }

    // isToggled
    isToggled = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient,
        private clientService : ClientControllerService,
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }
    ngOnInit() {
        this.loadClients();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
    loadClients(): void {
        this.clientService.findAll6().subscribe({
            next: (clients: ClientDto[]) => {
                this.listClients = clients;
                this.listClients.forEach(client => {
             
                    if (!client.adresse) {
                        client.adresse = {}; 
                    }
                });
            },
            error: (error) => {
                console.error('Erreur lors du chargement des clients', error);
                this.errorMsg = "Une erreur est survenue lors du chargement des clients.";
            }
        });
    
    }

} 
  



const ELEMENT_DATA: PeriodicElement[] = [
   
    {
        orderId: '',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        phone: '+1 555-658-4488',
        lastLogin: 'Nov 14, 2023',
        totalSpend: '$8,200.00',
        totalOrders: 169,
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
    
        
];
export interface PeriodicElement {
    orderId: string;
    customer: any;
    email: string;
    phone: string;
    lastLogin: string;
    totalSpend: string;
    totalOrders: number;
    status: any;
    action: any;
}