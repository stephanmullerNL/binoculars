import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {FollowersService} from '../user/followers.service';
import {PostsService} from '../user/posts.service';
import {User} from 'app/models/user';
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    user: User = new User();

    constructor(private followersService: FollowersService,
                private postsService: PostsService,
                private usersService: UserService) {
    }

    ngOnInit() {
        this.usersService.currentUser$.subscribe(user => this.user = user);

        this.followersService.followers$.subscribe(followers => {
            const followerNames = followers.map(follower => follower.follower);
            this.usersService.fetchUsers(followerNames);
        });

        this.postsService.allPosts$.subscribe(allPosts => {
            this.postsService.fetchReplies(allPosts);
        });

        Observable.combineLatest(
            this.usersService.users$,
            this.postsService.allPosts$,
            this.postsService.allReplies$
        ).subscribe(([users, posts, replies]) => {
            const commentCount = this.postsService.countPostsByAuthour(replies);
            const upvotes = this.postsService.getAllPostUpvotes(posts);
            const upvoteCount = this.postsService.countUpvotesByUser(upvotes);

            this.usersService.addStats(users, {

            })
        });
    }
}
