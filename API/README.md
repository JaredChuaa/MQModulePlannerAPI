# COMP3120 Advanced Web Development Group Project

This project is maintained by Jared Chua, Zac Redmond, Ramah Mersi, Richard Wright.

# API Documentation

This index page serves to provide an in-depth guide on the various APIs constructed.
API domain:

```bash
http://localhost:3001/
```

Endpoints are noted below.

# GET ALL something

- Endpoint: `/something`
- Response format: `JSON`
- URL: `http://localhost:3001/something`

## Example Request

```
GET http://localhost:3001/something
```

## Example Response

```
[
    something
]
```

# DELETE ONE something

- Endpoint: `/something/:id`
- Response format: `JSON`
- URL: `http://localhost:3001/something/<id>`

## Parameters

- Required: `id (_id of something)`

## Example Request

```
DELETE http://localhost:3001/something/5ed3d01f14f13256249b1826
```

## Example Response

```
{
    something
}
```

# GET ALL something

- Endpoint: `/something`
- Response format: `JSON`
- URL: `http://localhost:3001/something`

## Example Request

```
GET http://localhost:3001/something/
```

## Example Response

```
[
    something
]
```

# GET ONE something

- Endpoint: `/something/:id`
- Response format: `JSON`
- URL: `http://localhost:3001/something/<id>`

## Example Request

```
GET http://localhost:3001/something/5ed3d01614f13256249b1825
```

## Example Response

```
{
   something
}
```

# POST ONE something

- Endpoint: `/something`
- Response format: `JSON`
- URL: `http://localhost:3001/something`

## Parameters

- Required: `keyword: String`
- Optional: `riskValue: Number`
- Optional: `f_index: Number`
- Optional: `t_index: Number`
- Optional: `c_index: Number`
- Optional: `actualCount: Number`
- Optional: `autoAdded: Boolean`
- Optional: `lastUpdated: Date`
- Optional:

```
sourceEval: [
   something
]
```

- Optional:

```
urlSource: [
   something
]
```

## Example Request

```
POST http://localhost:3001/something/
{
    "keyword": "trade-war"
}
```

## Example Response

```
{
    something
}
```

# DELETE ONE something

- Endpoint: `/something/:id`
- Response format: `JSON`
- URL: `http://localhost:3001/something/<id>`

## Parameters

- Required: `something`

## Example Request

```
DELETE http://localhost:3001/something/5ed4660202189466e881fe2c
```

## Example Response

```
{
    something
}
```

# PATCH ONE something

- Endpoint: `/something/:id`
- Response format: `JSON`
- URL: `http://localhost:3001/something/<id>`

## Parameters

- Required: `something`
- Required: `Any fields that needs updating`

## Example Request

```
PATCH http://localhost:3001/something/5ed3d01f14f13256249b1826
{
    "riskValue": 42,
    "f_index": 26,
    "t_index":56,
    "actualCount": 44
}
```

## Example Response

```
{
    something
}
```

# GET ALL something

- Endpoint: `/something`
- Response format: `JSON`
- URL: `http://localhost:3001/something`

## Example Request

```
GET http://localhost:3001/something
```

## Example Response

```
[
    something
]
```

# POST ONE something

- Endpoint: `/something`
- Response format: `JSON`
- URL: `http://localhost:3001/something`

## Example Request

```
POST http://localhost:3001/something
{
    "twitterName": "WaterNSW"
}
```

## Example Response

```
{
    something
}
```
