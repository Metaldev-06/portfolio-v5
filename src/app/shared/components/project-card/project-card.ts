import { Component, input } from '@angular/core';

import { Eye, Github, LucideAngularModule } from 'lucide-angular';

import { Project } from '@portfolio/pages/home/interfaces/home-data-response';

@Component({
  selector: 'app-project-card',
  imports: [LucideAngularModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  public project = input.required<Project>();

  readonly Eye = Eye;
  readonly Github = Github;
}
