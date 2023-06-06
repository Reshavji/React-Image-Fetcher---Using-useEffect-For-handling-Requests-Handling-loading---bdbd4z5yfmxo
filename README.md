# React photo fetcher.

The API <code>https://jsonplaceholder.typicode.com/photos/${id}</code> where id is number between 1-5000, returns an object 
of this structure 
<code>
{ <br/>
&nbsp;albumId: 1,<br/>
&nbsp;id: 5,<br/>
&nbsp;title: "natus nisi omnis corporis facere molestiae rerum in",<br/>
&nbsp;url: "https://via.placeholder.com/600/f66b97",<br/>
&nbsp;thumbnailUrl: "https://via.placeholder.com/150/f66b97"<br/>
}
</code>

On initial load of application, only an input box which takes only numbers is visible.
When someone enters a number, it makes a GET request to the above mentioned api with that number.
While request is resolving, it shows the <code>Loader</code> component which is predefined.

After data has been fetched, display the <code>PhotoFrame</code> component.
The <code>PhotoFrame</code> component takes 2 props, url and title.
The component returns a div with class="photoframe", inside that
using display an img with using url prop as src.
Also display the title inside div with class="caption".

This repeats further whenever someone changes the number in input.


