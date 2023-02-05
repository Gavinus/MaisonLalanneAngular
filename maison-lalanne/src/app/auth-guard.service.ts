import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isLoggedIn)
            return true;

        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}