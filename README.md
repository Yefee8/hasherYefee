# HasherYefee
## A basic hasher library made with vanilla JavaScript

## Documentation

### Why HasherYefee?
Because it's very basic and lightweight.

### Get started
To get started we need the import HasherYefee, 2 ways to import library;
1- Using CDN
```
<script src='https://yefee8.github.io/hasherYefee/minified.js'></script>
<script>
// some code
</script>
```

2- clone the library

```
git clone ...
```

#### How to hash a text?
it's with ```hash('text')``` function, Instead of the 'text' part, you should write the text you want to hash (text must be string)
For example:
```
<script src='https://yefee8.github.io/hasherYefee/minified.js'></script>
<script>
console.log(hash('text'));
// that code gonna return 'ufyu'.
</script>
```

#### How to unhash a text?
it's with ```unHash('text')``` function, Instead of the 'text' part, you should write the text you want to hash (text must be string)
For example:
```
<script src='https://yefee8.github.io/hasherYefee/minified.js'></script>
<script>
console.log(unHash('ibtiUijt'));
// that code gonna return 'hashThis'.
</script>
```
