import { TutorialService } from './../../services/tutorial.service';
import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/model/tutorial.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id).subscribe(
      data => {
        this.currentTutorial = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data).subscribe(
      response => {
        this.currentTutorial.published = status;
        console.log(response);
        this.message = response.message ? response.message: 'The status updated sucessfully';
      },
      error => {
        console.log(error);
      }
    );

  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message: 'The status updated sucessfully';
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/tutorials']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
