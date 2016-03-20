import {blogPost} from './blogPost';
import {blogPostDirective} from './blogPost.directive';
import template from './blogPost.html';
import {BlogPostController} from './blogPost.controller';

describe('BlogPost', () => {
    let $rootScope;
    let makeController;

    beforeEach(window.module(blogPost.name));
    beforeEach(inject(_$rootScope_ => {
        $rootScope = _$rootScope_;
        makeController = (injectables) => {
            return new BlogPostController(injectables);
        };
    }));

    describe('module', () => {
        it('should have an appropriate name', () => {
            expect(blogPost.name).to.equal('blogPost');
        });
    });

    describe('directive', ()=> {
        let ddo;
        beforeEach(() => {
            ddo = blogPostDirective();
        });

        it('should have the right template', () => {
            expect(ddo.template).to.equal(template);
        });

        it('should have the right controller', () => {
            expect(ddo.controller).to.equal(BlogPostController);
        });

        it('should have an isolate scope', () => {
            expect(ddo.scope).to.be.an('object');
        });

        it('should use controllerAs', () => {
            expect(ddo.controllerAs).to.be.a('string');
        });
    });
});
