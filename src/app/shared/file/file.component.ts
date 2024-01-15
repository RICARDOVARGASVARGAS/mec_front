import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.css',
})
export class FileComponent {
  @Input() id?: any;
  @Input() model?: any;
  @Input() storage?: any;
  @Input() multiple: boolean = false;
  @Output() message = new EventEmitter();

  file: any;
  loading = false;

  constructor(private service: ApiService) {}

  onFileSelected(event: any) {
    this.loading = true;
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;

      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('id', this.id);
      formData.append('model', this.model);
      formData.append('storage', this.storage);

      // Subir una imagen
      if (!this.multiple) {
        this.service.api('uploadFile', 'post', formData).subscribe(
          (res: any) => {
            this.service.toast('success', res.message);
            this.file = null;
            this.message.emit();
          },
          (err: any) => {
            console.log(err);
            this.service.toast('error', err.error.message);
          },
          () => {
            this.loading = false;
          }
        );
      } else {
        // Multiple
        this.service.api('uploadImageMany', 'post', formData).subscribe(
          (res: any) => {
            this.service.toast('success', res.message);
            this.file = null;
            this.message.emit();
          },
          (err: any) => {
            console.log(err);
            this.service.toast('error', err.error.message);
          },
          () => {
            this.loading = false;
          }
        );
      }
    }
  }
}
