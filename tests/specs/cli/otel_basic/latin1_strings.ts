// Copyright 2018-2026 the Deno authors. MIT license.

import { trace } from "npm:@opentelemetry/api@1.9.0";

const tracer = trace.getTracer("example-tracer");

const span = tracer.startSpan("café span");
span.setAttribute("clé", "Médicale");
span.setAttribute("villes", ["Zürich", "Málaga"]);
span.end();

console.log("Imagerie Médicale");
