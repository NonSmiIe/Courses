import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-member-detailt',
  templateUrl: './member-detailt.component.html',
  styleUrls: ['./member-detailt.component.css']
})
export class MemberDetailtComponent implements OnInit {
  member!: Member;
 
  constructor(private memberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
   
  }
  
  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username') || "").subscribe(member => {
      this.member = member;
    })
  }
}
