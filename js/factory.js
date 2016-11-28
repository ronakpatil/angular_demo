/**
 * Created by ronakp on 22-09-2016.
 */


// Factory name is StringService
oneAppmod.factory("stringService", function () {
    return {

        // ProcessString is function inside stringService

        processString: function (input) {
            if (!input) {
                return input;
            }

            var output = "";

            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];
            }
            return output;
        }
    };
});