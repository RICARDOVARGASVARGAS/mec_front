import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-message',
  templateUrl: './sale-message.component.html',
  styleUrl: './sale-message.component.css',
})
export class SaleMessageComponent {
  id = null;
  loading = false;
  item: any = {};
  messages: any = [];
  errors: any = null;
  msj: any = {};
  file: any;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    this.msj.content = '';
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getInfo();
      this.getMessages();
    });
  }
  getInfo() {
    this.service
      .api(`sale/getSale/${this.id}`, 'post')
      .subscribe((res: any) => {
        this.item = res.data;
      });
  }

  getMessages() {
    this.service
      .api(`mec/getMessages/${this.id}`, 'get')
      .subscribe((res: any) => {
        console.log(res);
        this.messages = res.messages;
      });
  }

  sendMessage() {
    if (this.msj.content.trim().length > 0) {
      this.loading = true;
      this.msj.type = 'text';
      this.msj.user_id = this.service.user.id;
      this.msj.sale_id = this.id;

      this.service
        .api('mec/sendMessage', 'post', this.msj)
        .subscribe((res: any) => {
          this.loading = false;
          this.getMessages();
          this.msj = {};
          this.service.toast('success', 'Mensaje enviado');
        });
    } else {
      this.service.toast('error', 'Escribe un mensaje');
    }
  }

  onFileSelected(event: any) {
    this.loading = true;
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;

      const formData = new FormData();
      formData.append('content', this.file);
      formData.append('type', 'image');
      formData.append('sale_id', this.id + '');
      formData.append('user_id', this.service.user.id);

      this.service.api('mec/sendMessage', 'post', formData).subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Imagen subida');
          this.file = null;
          this.getMessages();
          this.msj = {};
        },
        (err: any) => {
          this.loading = false;
          console.log(err);
          this.service.toast('error', err.error.message);
        }
      );
    }
  }

  deleteMessage(id: any) {
    this.service
      .api(`mec/deleteMessage/${id}`, 'delete')
      .subscribe((res: any) => {
        this.service.toast('success', 'Mensaje eliminado');
        this.getMessages();
      });
  }

  cancel() {}
}
