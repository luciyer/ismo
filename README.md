# ismo

As in lunfardismo, a project for which this very simple stack will serve as the backend, providing a REST server to manage dictionary entries.

---

### API

#### List Entries

`GET` @ `/api/entry`

Response:

```
[
    {
        "language": "Spanish",
        "country": "Argentina",
        "published": false,
        "_id": "5ee9863fa6847b19b905d565",
        "title": "Yuta",
        "definition": "A police officer.",
        "part_speech": "noun",
        "created": "2020-06-17T02:55:59.308Z",
        "slug": "yuta",
        "__v": 0
    }
]
```

#### New Entry

`POST` @ `/api/entry`

Body:

```
{
  "title" : "Quilombo",
  "definition" : "A disaster, a clusterfuck.",
  "part_speech" : "Noun"
}
```

#### Retrieve Entry by Slug

`GET` @ `/api/entry/:slug`

#### Update Entry by Slug

`PATCH` @ `/api/entry/:slug`

```
{ "title" : "Quilombero" }
```

_Note: slug will update if title is updated._

#### Delete Entry by Slug

`DELETE` @ `/api/entry/:slug`
