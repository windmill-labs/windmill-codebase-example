#!/bin/bash

# Directory path
DIR="u/fii"

# Clear the directory if it exists, create it if it doesn't
rm -rf "$DIR"
mkdir -p "$DIR"

# Array of possible function names and variable names for more realistic files
FUNCTIONS=("calculate" "process" "validate" "transform" "handle" "format" "parse" "convert" "update" "generate")
TYPES=("string" "number" "boolean" "array" "object" "any" "void" "never")
NOUNS=("Data" "User" "Item" "Config" "State" "Event" "Response" "Request" "Result" "Value")

# Generate 50 random TypeScript files
for i in {1..50}; do
    # Generate random file name
    filename="$DIR/script_${i}.ts"
    
    # Random function and variable names
    func_name="${FUNCTIONS[$RANDOM % ${#FUNCTIONS[@]}]}${NOUNS[$RANDOM % ${#NOUNS[@]}]}"
    var_name="${NOUNS[$RANDOM % ${#NOUNS[@]}]}"
    type_name="${TYPES[$RANDOM % ${#TYPES[@]}]}"
    
    # Create the value based on type
    if [ "$type_name" = "string" ]; then
        type_value='"example"'
    elif [ "$type_name" = "number" ]; then
        type_value="$RANDOM"
    elif [ "$type_name" = "boolean" ]; then
        type_value="true"
    else
        type_value="undefined"
    fi
    
    # Create file with random TypeScript content
    cat > "$filename" << ENDOFFILE
/**
 * Generated TypeScript file ${i}
 * Created at: $(date)
 */

interface I${var_name} {
    id: number;
    name: string;
    value: ${type_name};
}

export function ${func_name}(input: I${var_name}): ${type_name} {
    // TODO: Implement ${func_name} logic
    console.log('Processing ${var_name}:', input);
    return input.value;
}

const sample${var_name}: I${var_name} = {
    id: ${RANDOM},
    name: '${var_name}_${i}',
    value: ${type_value}
};

${func_name}(sample${var_name});
ENDOFFILE

done

echo "Created 50 random TypeScript files in $DIR"
