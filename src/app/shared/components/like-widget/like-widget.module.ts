import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LikeWidgetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
