import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { PostsApiClient } from '../../posts-api-client.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostFormComponent implements OnInit {
  public post;

  private postForm: FormGroup;
  private title: AbstractControl;
  private body: AbstractControl;
  private submitted = false;

  constructor(private fb: FormBuilder, private postsApiClient: PostsApiClient) {}

  ngOnInit() {
    this.buildForm();
    this.initForm();
  }

  buildForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    this.title = this.postForm.controls['title'];
    this.body = this.postForm.controls['body'];
  }

  initForm() {
    if (this.post !== undefined) {
      this.postForm.patchValue(this.post);
    }
  }

  onSubmit(event: Event, form: any) {
    this.submitted = true;
    if (this.postForm.valid) {
      this.postsApiClient.create(form).subscribe();
    }
  }

  cancel() {
    // this.cancelEvent.emit();
  }
}
