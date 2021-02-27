import { 
  Component, 
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('constructor: ', 'LifecycleHookComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit: ', 'LifecycleHookComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: ', 'LifecycleHookComponent');
  }

}
